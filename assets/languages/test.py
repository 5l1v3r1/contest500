def is_solution(key):
    if len(key) != 11: return False
    a = int(key[0])
    b = int(key[1])
    c = int(key[2])
    d = int(key[3])
    e = int(key[4])
    f = int(key[5])
    g = int(key[6])
    h = int(key[7])
    i = int(key[8])
    j = int(key[9])
    k = int(key[10])
    if j / b != f: return False
    if c / i != b: return False
    if d / e != a: return False
    if h / e != b: return False
    if b % c != e: return False
    if f % d != j / d: return False
    if k % i != j: return False
    if k % d != a * b: return False
    if e - g != i: return False
    if d - g != c: return False
    if k + a != d: return False
    if a * b != e * i: return False
    return True

def main():
    while True:
        try:
            if is_solution(raw_input()):
                print('correct key!')
                break
            else:
                print('incorrect key :(')
        except ValueError:
            print('string must be numeric')

main()

