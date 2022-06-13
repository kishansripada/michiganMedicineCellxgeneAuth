const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var path = require('path');
app.use(express.static("public"));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})


app.get('/app', (req, res) => {

    res.sendFile(path.join(__dirname, 'test.html'))

})


app.get('/login/:password', (req, res) => {

    let passwordUrlDict = {
        fadhl: "https://corpora-data-prod.s3.amazonaws.com/146216e1-ec30-4fee-a1fb-25defe801e2d/local.h5ad?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATLYQ5N5XRX2C7TQX%2F20220613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220613T213614Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDc3x8JptmcoUJoegNMg2AhBnPdMprnheDitaOTtAN5eAiEA3XULbw45n%2FcuvyLjWpDgwJytWV2fjDDjbLndR%2B9jN7gq6wMIehABGgwyMzE0MjY4NDY1NzUiDG%2FP8YWBNB4EPL5xaSrIA1hc6gfExgxtae8FQyXKWQB%2FFPTOKqMzVmjQJpApsCFdtQJ3OIRR4EBukSczaSQFxx5MPndtCB7%2BXcmaPolKcu2assDKs%2FfNUHwgt1aJ6QrXePCMhNOyzwCRGFGLKrwr4mbeAm18mt2q9KS9KpmPsQI%2BXzCLzl%2Fu5fEcpGE9bJ0XAo9IwIJBtUexA2ZeW7SrFBt9OzPjHKR8%2BG%2Fe5TmZpF4hZoQ58KoAmOn%2F8OPKHwoBZSYlLapMJGVPgd2EgdKZUBNTeRp6t8BkXWAKckqjlglptJ471v8TXCY4RRqvL%2BopuJopdK2J5F1Qs5OH%2FwYioFsD%2FxGU%2FvLFATnLXHXa6Jrg9%2BbuoTVmCxrRzv5r8B1a2KMM1Vgb15t%2FC%2BgenE8%2Fyzh5pY5%2BEvnzWMJVH63F2VeJbG6ErXQRuiop%2BvSyKOpIIIdUxpAwPsQZb0XVgyMR7LZ69T5PG4HpINFnHkgbSFs7ExzBRJB%2FehI9x27zKoIidenYLvA2QM78JH7kL5faeLJ4i5%2F63fGl%2Bs0jyRg%2BUFpEZQMA1dsdxyaD1msGIGtzCiVYKjmuWPDs9BjjfY4xwhv0BiU43cCa%2FHO4ifxS9PzPa5ZijZTlmDDJ0J2VBjqlAYWT%2Fm0Grtj1qwXVSYo7qwo2%2BCEDwdTiWFuLuMGeHj%2BX0beeQbRWqKtQJl19bWc7XmLHM4NbZMFaHZs5F0ualyGFA8u3l8%2By0%2Fmp4hMUWwdLqdPSWxXBjdkW187HwipF%2FUjyinxhEVN4%2Fr5vCYYit%2BzvO5sn9x5Hiqwav8t6EsorQGozWX2stHTccDVbp0WLBuT5m8eVJRw5Ondzkf6X6MbPeMdxKw%3D%3D&X-Amz-Signature=6f0542d2cb92b909634176f2f65017d12bcaf84a12b1048135b97b0ccd558fd5",
        password: "https://corpora-data-prod.s3.amazonaws.com/5571ad37-d0ea-4372-9905-67b5a4deaf80/local.h5ad?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATLYQ5N5X7W2PY52M%2F20220613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220613T213639Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAnNMqLpVNMM7Cyj9FXg8p88uu424ns6NN7xVs9RN8s5AiAxm%2Br%2FO8L1P9yr%2FRhAW4kkXfLyXlcycN11eRBU%2Bvy0dSrrAwh5EAEaDDIzMTQyNjg0NjU3NSIM%2BVBLltZfEte3R3W7KsgDiLyDoKvwHBdunFFT9e9dSw9I9FyGO0ijpPdMvAijcr%2BUg72sIzjenPV%2F2vMObn%2Be1zkePFOZ2wM7DbvE%2FEHCjQHngkSybsTmn8iovnXPmnzS%2FDGSMMAnm5GEHckeVs4sIbdghxtLmPjZ7rQvuJSeKngkxLgpQ6MhzEfDZ67j07%2F6oANdEHIMRQe%2B1uZ%2BzN30rexmF3NA00knP%2Bsl88dto98%2Fhh7uX0LKfaElXpgTE%2FR0zPAvlrk6pHjA0vEah3y9KqR6uIUHmyDQlh5PKf%2F5GpgH6RyhD5TJiwC7lAdQ9%2Bd%2Bx9Z3QTySHTTPFxqQYp9xmJ9KH0YFjPZcdlyBdQ%2FYsrgsoCYy9c2FgPM0jIYO7TYJlhopvrTxVB%2BbWjQ4owTSlArreDO2BTRQ5pB5E%2BG4HNgcngDyeIBXJacWucIYqbbHovA8WNTn3u%2FXSlXrwcp98iKblvRmBdqFQUPuYvfLWCpUuvnfFN2KPL9opvpLy3UUDXhkzfHZhQ5HHshelKKWIFPCE9LhVlsuglAxMqzO6Uaz%2F4OhR4BhU%2ByJFlaBBRbk32enKiZr%2FrWxLRXLhuLB%2F%2FddDC0px1nw4BZbhcS5QZC%2BCg%2F6KF6sMO%2FGnZUGOqYBALQ%2F63Y9QZM4vOdcHPAfl7jf%2B5qaqyOAJ5nf%2FaPEmZfnuFzGwPKPHqXG0DE%2BCb7Ex9AN8v%2B1H0UZv1%2ByKP918cZRm%2FV2Da074Rq9Gbb1Ux1nQp1MMBAbDwELddEn3XSm78Fm%2BmZoeQvCfCtTaEEBOUyUbEY%2ByeEQ6%2FQ2fFnWLw0peKDAQ9uHWo7DbRIJBzHYgxt0UzWz77cPqmkRPVngN9nRWux1Ag%3D%3D&X-Amz-Signature=359bc4c8f17804c1bf36db1e9514089e0b17fe2c69dd7d1ccc58115f21f0b64a"
    }


    return passwordUrlDict[req.params.password]
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
