/**
 * Deno includes:
 * 
 * 1. The test runner in the CLI
 * 2. Assertions in the standard library
 * 3. Built-in test fixtures with Deno.test()
 */

import { assertEquals } from "https://deno.land/std@0.60.0/testing/asserts.ts";


Deno.test('short example test', () => {
    assertEquals("deno", "deno")
})

Deno.test({
    name: "long example test",
    fn() {
        assertEquals("deno", "deno");
    }
})

Deno.test({
    name: "ops leak",
    sanitizeOps: false, // checks if async tasks are all completed | default: true
    fn() {
        setTimeout(console.info, 10000);
    }

})

Deno.test({
    name: "resources leak",
    sanitizeResources: false, // checks if resources are left open | default: true
    async fn() {
        await Deno.open('models/planets.ts');
    }
})