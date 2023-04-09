/*
    Given a valid (IPv4) Internet Protocol address S, the task is to find the defanged version of that IP address.
    Defanged Version of IP Address: is in which every period “.” is replaced by “[.]”. 
    
    Input: S = “1.1.1.1” 
    Output: 1[.]1[.]1[.]1
    Input: S = “255.100.50.0” 
    Output: 255[.]100[.]50[.]0 
    
    Note: You need to escape the . because it has the meaning of "an arbitrary character" in a regular expression.
*/

const defangIP4 = (addr) => {
    const defanged = addr.replace(/\./g, '[.]')
    console.log(defanged);
}

defangIP4('1.1.1.1');
defangIP4('255.100.50.0');