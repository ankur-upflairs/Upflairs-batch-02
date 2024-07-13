for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.write('*')
    }
    document.write('<br>')

}
document.write('<br>')

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write('*')
    }
    document.write('<br>')
}
document.write('<br>')

for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        document.write('*')
    }
    document.write('<br>')
}
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write('&nbsp;')
    }
 
    for(let k=5;k>=i;k--){
        document.write('*')
    }
    document.write('<br>')
}

