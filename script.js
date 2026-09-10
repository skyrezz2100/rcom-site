const copyButton = document.getElementById('copy');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  const address = document.getElementById('mint').textContent.trim();
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(address);
    copyStatus.textContent = 'Token address copied.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('mint'));
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Address selected. Use your device’s Copy command.';
  }
});
