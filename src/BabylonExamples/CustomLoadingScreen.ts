import type { ILoadingScreen } from "@babylonjs/core";

export class CustomLoadingScreen implements ILoadingScreen {
  loadingUIBackgroundColor: string = "#000000"; // Initialized to satisfy interface
  loadingUIText: string = "";

  // 1. Explicitly declare the properties
  private loadingBar: HTMLElement | undefined;
  private percentLoaded: HTMLElement | undefined;
  private loader: HTMLElement | undefined;

  constructor(loadingBar?: HTMLElement, percentLoaded?: HTMLElement, loader?: HTMLElement) {
    this.loadingBar = loadingBar;
    this.percentLoaded = percentLoaded;
    this.loader = loader;
  }

  displayLoadingUI(): void {
    if (this.loadingBar) this.loadingBar.style.width = "0%";
    if (this.percentLoaded) this.percentLoaded.innerText = "0%";
  }

  hideLoadingUI(): void {
    if (this.loader) {
      this.loader.id = "loaded";
      setTimeout(() => {
        if (this.loader) this.loader.style.display = "none";
      }, 300);
    }
  }

  updateLoadStatus(status: string): void {
    if (this.loadingBar) this.loadingBar.style.width = `${status}%`;
    if (this.percentLoaded) this.percentLoaded.innerText = `${status}%`;
  }
}
