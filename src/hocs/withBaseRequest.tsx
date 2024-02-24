import { useHttp } from "../hooks/http.hook";
import ErrorMessage from "../components/UI/ErrorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import { HocBaseProps } from "../interfaces/interfaces";

export function withBaseRequest(
  Component: React.ComponentType<HocBaseProps>,
  Skeleton: React.ComponentType,
  countSkeleton: number,
  url: string,
) {
  return function (props: HocBaseProps) {
    const [list, setList] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState<string>("");

    const { request } = useHttp();

    useEffect(() => {
      setLoadingStatus("loading");
      request(url)
        .then((data) => {
          setList(data);
          setLoadingStatus("idle");
        })
        .catch(() => setLoadingStatus("error"));
    }, []);

    const checkLoading = () => {
      if (loadingStatus === "loading") {
        return [...Array(countSkeleton)].map((item, i) => {
          return <Skeleton key={i} />;
        });
      } else if (loadingStatus === "error") {
        return <ErrorMessage />;
      }
    };

    return <Component {...props} checkLoading={checkLoading} list={list} loadingStatus={loadingStatus} />;
  };
}