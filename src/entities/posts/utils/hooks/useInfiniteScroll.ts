import { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store.ts";
import { nextPage, isHasMore, setPosts } from "@/entities/posts/slices/postsSlice.ts";
import { postsApi } from "@/entities/posts/api/postsApi.ts";

export const useInfiniteScroll = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const loaderRef = useRef(null);

    const page = useSelector((state: RootState) => state.posts.page);
    const hasMore = useSelector((state: RootState) => state.posts.hasMore);
    const posts = useSelector((state: RootState) => state.posts.posts);
    const dispatch = useDispatch();

    const { data, error, isLoading, isFetching } = postsApi.useGetPostsQuery(page);

    useEffect(() => {
        if (data) {
            dispatch(setPosts(data));
            dispatch(isHasMore(data.length));
        }
    }, [data, dispatch]);

    const loadMoreItems = useCallback(() => {
        if (!isScrolling && !isFetching && hasMore) {
            setIsScrolling(true);
            dispatch(nextPage());

            setTimeout(() => setIsScrolling(false), 500);
        }
    }, [dispatch, hasMore, isFetching, isScrolling]);

    useEffect(() => {
        const currentLoaderRef = loaderRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    loadMoreItems();
                }
            },
            { threshold: 0.1, rootMargin: "200px" }
        );

        if (currentLoaderRef) {
            observer.observe(currentLoaderRef);
        }

        return () => {
            if (currentLoaderRef) {
                observer.unobserve(currentLoaderRef);
            }
        };
    }, [loadMoreItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling || isFetching || !hasMore) return;

            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const isNearBottom = scrollTop + clientHeight >= scrollHeight - 200;

            if (isNearBottom) {
                loadMoreItems();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore, isFetching, isScrolling, loadMoreItems]);

    return {
        posts,
        isLoading: isLoading && page === 1,
        isFetching,
        error,
        loaderRef,
        hasMore
    };
};