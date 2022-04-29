// esta é a forma como consegui fazer mais facilmente o exercício
const transcricaoDna={
    'A':'U',
    'T':'A',
    'C':'G',
    'G':'C'
    }

function conversorRna(str) {
    let arr=[];
    str=str.split('');
    str.forEach((nucleotido)=>{
    arr.push(transcricaoDna[nucleotido])
    })
    return arr;
    }
   
    console.log(conversorRna("ACGTGGTCTTAAAG"));

