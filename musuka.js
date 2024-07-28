const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// MP3ファイルのパスを配列に格納
const mp3Files = [
  'mp3/musuka1.mp3',
  'mp3/musuka2.mp3',
  'mp3/musuka3.mp3',
  'mp3/musuka4.mp3',
  'mp3/musuka5.mp3'
];

playButton.addEventListener('click', () => {
  // ランダムにMP3ファイルを選択
  const randomIndex = Math.floor(Math.random() * mp3Files.length);
  const selectedFile = mp3Files[randomIndex];

  // 選択したMP3ファイルを再生
  audioPlayer.src = selectedFile;
  audioPlayer.play();
});
