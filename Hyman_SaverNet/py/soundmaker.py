from gtts import gTTS

text = "테스트용 음성입니다."

tts = gTTS(text=text, lang='ko')
tts.save(r"test.mp3")