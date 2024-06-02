import React from 'react';
import type { RouteObject } from 'react-router-dom';

import { ROUTERS } from 'src/constants/routers';
import { PrivateLayout } from 'src/layouts';
import NotFoundScreen from 'src/screens/NotFound';
import { ContactScreen, EtiquettesScreen, OpportunitesScreen, TachesScreen } from 'src/screens/privateScreens';

const _privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      { path: ROUTERS.CONTACTS.PATH, element: <ContactScreen /> },
      { path: ROUTERS.OPPORTUNITES.PATH, element: <OpportunitesScreen /> },
      { path: ROUTERS.ETIQUETTES.PATH, element: <EtiquettesScreen /> },
      { path: ROUTERS.TACHES.PATH, element: <TachesScreen /> },
      { element: <NotFoundScreen />, path: '*' },
    ],
  },
];

export default _privateRoutes;
