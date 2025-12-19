export const useGetForm = async (id: string) => {
  const response: ApiResponse<FormUse> = await useMicroAPIFetch(
    `form-use/${id}`,
    "FORM",
    { method: "GET" }
  );
  return response.data;
};

export const useSubmitForm = async (
  id: string,
  data: Record<string, string | string[] | number | boolean>
) => {
  const response: ApiResponse<FormUse> = await useMicroAPIFetch(
    `form-use/submit`,
    "FORM",
    {
      method: "POST",
      body: {
        id: id,
        data: data,
      },
    }
  );
  return response.data;
};
