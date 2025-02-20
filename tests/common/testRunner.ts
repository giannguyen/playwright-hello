import { Page, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

export function readTestConfig(testFileName: string) {
    const testFilePath = path.resolve(__dirname, '../steps', `${testFileName}.ts`);

    if (fs.existsSync(testFilePath)) {
        const { testConfig } = require(testFilePath);
        return testConfig;
    } else {
        throw new Error(`Test config file not found: ${testFilePath}`);
    }
}

export async function runTestSteps(testConfig: any, page: Page) {
    await page.goto(testConfig.url);

    for (const step of testConfig.steps) {
        console.log(`Executing step: ${JSON.stringify(step)}`);
        switch (step.action) {
            case 'click':
                await page.click(step.item);
                break;
            case 'dblclick':
                await page.dblclick(step.item);
                break;
            case 'hover':
                await page.hover(step.item);
                break;
            case 'fill':
                await page.fill(step.item, step.value);
                break;
            case 'type':
                await page.type(step.item, step.value);
                break;
            case 'press':
                await page.press(step.item, step.value);
                break;
            case 'check':
                await page.check(step.item);
                break;
            case 'uncheck':
                await page.uncheck(step.item);
                break;
            case 'selectOption':
                await page.selectOption(step.item, step.value);
                break;
            case 'expect':
                await expect(page.locator(step.item)).toHaveText(step.value);
                break;
            default:
                throw new Error(`Unknown action: ${step.action}`);
        }
    }
}