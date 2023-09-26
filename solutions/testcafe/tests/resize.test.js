fixture('Getting Started')
  .page('https://devexpress.github.io/testcafe/example');


test('Image disappears on small screens', async t => {
  await t
    .resizeWindow(1024, 768);
  await t.wait(5000)
});
