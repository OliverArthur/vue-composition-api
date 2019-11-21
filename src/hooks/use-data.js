import { toRefs, reactive } from "@vue/composition-api";
import useApi from "../hooks/use-api";
export function useFetchData(url, version, fragment) {
  const data = reactive({ list: [], error: null, loading: false });

  const get = async () => {
    const { response, error, fetchData, loading } = useApi(
      url,
      version,
      fragment,
      {}
    );
    fetchData();
    data.list = response;
    data.error = error;
    data.loading = loading;
  };

  return { get, ...toRefs(data) };
}
