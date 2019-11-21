import { toRefs, reactive } from "@vue/composition-api";
export default function(url, version, fragment, option) {
  console.log(url, version);
  const state = reactive({
    response: [],
    error: null,
    loading: false
  });
  const apiUri = `https://api.${url}.com/${version}/${fragment}`;
  console.log(apiUri);
  const fetchData = async () => {
    state.loading = true;
    try {
      const response = await fetch(apiUri, option);
      const data = await response.json();
      state.response = data;
    } catch (errors) {
      state.error = errors;
    } finally {
      state.loading = false;
    }
  };

  return {
    ...toRefs(state),
    fetchData
  };
}
