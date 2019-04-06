class Hello {
  private name: string = "";

  private remember(name: string): void {
    this.name = name;
  }

  public hi(name: string): void {
    new Promise<string>(resolve => {
      resolve(name);
    }).then(this.remember.bind(this));
  }
}

const h = new Hello();
h.hi("john");
