<template>
  <div class="app-body" role="region">
    {{ list }}
  </div>
</template>

<script>
import { useFetchData } from "../hooks/use-data";

export default {
  name: "AppBody",
  props: {
    api: {
      type: String,
      default: null,
      required: true
    },
    version: {
      type: String,
      default: "v1",
      required: true
    },
    fragment: {
      type: String,
      default: null,
      required: true
    }
  },
  setup(props) {
    const { api, version, fragment } = props;
    const { get, list, error, loading } = useFetchData(api, version, fragment);
    return {
      ...get(),
      list,
      error,
      loading
    };
  }
};
</script>
