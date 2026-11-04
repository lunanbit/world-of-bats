document.querySelectorAll('.command button').forEach((button) => {
  button.addEventListener('click', async () => {
    const command = button.closest('.command')?.querySelector('code')?.textContent ?? '';
    try {
      await navigator.clipboard.writeText(command);
      button.textContent = 'Copied!';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1600);
    } catch {
      button.textContent = 'Select text';
    }
  });
});
