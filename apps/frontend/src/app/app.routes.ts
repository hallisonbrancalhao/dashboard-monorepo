import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@dashboard-monorepo/client/auth').then((m) => m.ClientAuthModule),
  },
];
