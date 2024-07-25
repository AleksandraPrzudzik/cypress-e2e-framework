/// <reference types="cypress" />
import 'cypress-mochawesome-reporter/register';

import type users from '../fixtures/users.json';

interface FixtureTypes {
  users: typeof users;  
  // Add other fixtures here
}

declare global {
  namespace Cypress {
    interface Chainable {
      fixture<K extends keyof FixtureTypes>(
        fixtureName: K,
      ): Chainable<FixtureTypes[K]>;
    }
  }
}