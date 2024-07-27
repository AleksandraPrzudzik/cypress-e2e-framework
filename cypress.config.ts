import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";
const cypressOnFix = require('cypress-on-fix');

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  on = cypressOnFix(on);
  
  require('cypress-mochawesome-reporter/plugin')(on);
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    preprocessor(config, {
      typescript: require.resolve("typescript"),
    })
  );

  return config;
}

export default defineConfig({
  retries: 3,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  chromeWebSecurity: false,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
  reportDir: 'reports/mochawesome',
  charts: true,
  reportPageTitle: 'Cypress E2E Framework: Results',
  embeddedScreenshots: true
  },

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
});
