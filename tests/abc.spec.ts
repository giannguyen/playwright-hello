import { test } from '@playwright/test';
import { readTestConfig, runTestSteps } from './common/testRunner';
import * as path from 'path';
import * as fs from 'fs';

const currentFileName = path.basename(__filename, '.spec.ts');
const testConfig = readTestConfig(currentFileName);

test(testConfig.test, async ({ page }) => {
    try {
        await runTestSteps(testConfig, page);
    } catch (error) {
        test.skip();
    } finally {
        const evidenceDir = path.resolve(__dirname, 'evidence');
        if (!fs.existsSync(evidenceDir)) {
            fs.mkdirSync(evidenceDir);
        }
        const screenshotPath = path.resolve(evidenceDir, `${testConfig.test}.png`);
        await page.screenshot({ path: screenshotPath });
    }
});






