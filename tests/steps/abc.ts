export const testConfig = {
    "test": "validate test",
    "url": "https://www.google.com",
    "steps": [
        {
            "item": "xpath",
            "action": "click",
            "value": ""
        },
        {
            "item": "xpath",
            "action": "fill",
            "value": "ab@gmail.com"
        },
        {
            "item": "xpath",
            "action": "check",
            "value": ""
        },
        {
            "item": "xpath",
            "action": "expect",
            "value": "error message"
        }
    ]
};