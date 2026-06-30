// Use Song.mp3 from public/assets
export function startNotificationSound() {
  const audio = new Audio('/Song.mp3');
  audio.volume = 0.7;
  audio.play().catch(err => console.log('Audio play failed:', err));
}
