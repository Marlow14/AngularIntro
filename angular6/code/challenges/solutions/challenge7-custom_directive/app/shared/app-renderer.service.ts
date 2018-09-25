export abstract class AppRenderer {
  abstract invokeElementMethod(el, method, args): any;
}

export class AppDomRenderer implements AppRenderer {
  invokeElementMethod(el, method, args): any {
    if (method === 'focus') {
      el.focus();
    }
  }
}
