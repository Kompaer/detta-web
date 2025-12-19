export const useGetTextBlocks = async (publisher_id: string, lang: string) => {
  const response: ApiResponse<any> = await useAPIFetch(`content-chunks`, {
    method: "GET",
    query: { publisher: publisher_id, lang: lang },
  });
  return response.data;
};
