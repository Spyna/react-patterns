import { useEffect } from "react";
import { Presenter, ViewModel } from "../presenter/Presenter";
import { ServiceIdentifier } from "./types";
import { useInject } from "./useInject";

export function useModel<T extends ViewModel>(
  type: ServiceIdentifier<Presenter>
): T {
  const presenter = useInject<Presenter>(type);

  useEffect(() => {
    async function bootrstrap() {
      try {
        await presenter.loadViewModel();
      } catch (error) {
        console.log("an error occurred while loading the view model", error);
      }
    }
    bootrstrap();
    return () => {
      presenter.cleanModel();
    };
  }, [presenter]);

  return presenter.viewModel as T;
}
