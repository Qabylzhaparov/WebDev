n=int(input()) 
n1=[int(x) for x in input().split()] 
n1.sort() 
q=int(n1[-1]) 
v=int(n1[-2]) 
print(q*v)