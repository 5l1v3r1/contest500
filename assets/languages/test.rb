def parseInt(aStr)
    num = aStr.to_i
    raise 'invalid number' if num == 0 && aStr != '0'
    return num
end

def is_solution(key)
    return false if key.length != 11
    a = parseInt(key[0])
    b = parseInt(key[1])
    c = parseInt(key[2])
    d = parseInt(key[3])
    e = parseInt(key[4])
    f = parseInt(key[5])
    g = parseInt(key[6])
    h = parseInt(key[7])
    i = parseInt(key[8])
    j = parseInt(key[9])
    k = parseInt(key[10])
    return false if j / b != f
    return false if c / i != b
    return false if d / e != a
    return false if h / e != b
    return false if b % c != e
    return false if f % d != j / d
    return false if k % i != j
    return false if k % d != a * b
    return false if e - g != i
    return false if d - g != c
    return false if k + a != d
    return false if a * b != e * i
    return true
end

while true
    begin
        if is_solution(gets.chomp)
            puts 'correct key!'
            break
        else
            puts 'invalid key :('
        end
    rescue ZeroDivisionError
        puts 'invalid key :('
    rescue
        puts 'string must be numeric'
    end
end
