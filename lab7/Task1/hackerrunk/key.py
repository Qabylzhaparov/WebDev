n=input().split() 
narray=[] 
for i in n: 
    t='' 
    for x in i: 
        if x.isalpha(): 
            t+=x 
    narray.append(t) 
narray=set(narray) 
print(len(narray)) 
for i in sorted(narray): 
    print(i)