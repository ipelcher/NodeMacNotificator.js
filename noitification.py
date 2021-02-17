from subprocess import call

def osx_notification(text, title=""):
    text   = text.replace('"', '\\"')
    title  = title.replace('"', '\\"')
    script = 'display notification "{}" with title "{}"'.format(text, title)
    call(['osascript', '-e', script])

osx_notification('СРОЧНО', title='ИДИ СПАТЬ!!!!')