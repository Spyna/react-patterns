export interface ViewModel {
  [key: string]: any;
}

export interface Presenter {
  loadViewModel(): Promise<void>;
  cleanModel(): Promise<void>;
  viewModel: ViewModel;
}
