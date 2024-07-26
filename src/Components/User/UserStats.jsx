import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
const UserStatsGraphs = React.lazy(() => import("./UseStatsGraphs.jsx"));

const UserStates = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(
    () => {
      async function getData() {
        const { url, options } = STATS_GET();
        await request(url, options);
      }
      getData();
    },
    [request]
  );

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  if (data) {
    return (
      <React.Suspense fallback={<div />}>
        <Head title="Estátisticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else {
    return null;
  }
};

export default UserStates;
