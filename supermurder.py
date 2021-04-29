#Only supermurder

def read(line):
    counter = 0
    for i in line.split(' '):
        if i == 'supermurder':
            counter += 1
    return chr(counter)

def readall(lines):
    text = ''
    for i in lines:
        text += read(i.replace('\n',''))
    print(text)

def run():
    wantedfile = 'generated.supermurder'
    try:
        wantedfile = open(wantedfile, 'r+')
        wantedfile.write('')

        lines = wantedfile.readlines()

        wantedfile.close()

        readall(lines)
    except:
        print('File not found')

run()
