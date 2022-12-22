import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim, skipWaiting } from 'workbox-core';

declare const self: ServiceWorkerGlobalScope;

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);
