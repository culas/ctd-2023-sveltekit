export const formatTime = (timestamp: string): string => {
  return new Date(timestamp).toLocaleTimeString('de-CH', {hour: "2-digit", minute: '2-digit'});
}