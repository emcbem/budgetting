import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-013fwxix4dwe1jea.us.auth0.com',
      clientId: 'JY26bmn56wTqfL8W0HzgfGEN8IQA6CP1',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-013fwxix4dwe1jea.us.auth0.com/api/v2/',
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:8080/secured/*',
            
          },
        ],
      },
    }),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
  ],
};
