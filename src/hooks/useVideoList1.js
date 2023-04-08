import { useQuery } from 'react-query';
import { get,getDatabase, query, ref, orderByKey, startAt, limitToFirst } from 'firebase/database';

export default function useVideoList(page) {
  const queryKey = ['videos', page];

  const fetchVideos = async (key, page) => {
    const db = getDatabase();
    const videosRef = ref(db, 'videos');
    const videoQuery = query(
      videosRef,
      orderByKey(),
      startAt('' + page),
      limitToFirst(8),
    );

    const snapshot = await get(videoQuery);

    if (snapshot.exists()) {
      const videos = Object.values(snapshot.val());
      return videos;
    } else {
      throw new Error('No videos found');
    }
  };

  const { isLoading, isError, data } = useQuery(queryKey, fetchVideos);

  return {
    loading: isLoading,
    error: isError,
    videos: data || [],
    hasMore: data && data.length === 8,
  };
}
