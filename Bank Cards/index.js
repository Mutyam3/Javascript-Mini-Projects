


          const customerArray = []
          let customerDetails
          let cardDetails

    // customer form data 
          let customerFirstName = document.customerInfo.firstName
          let customerLastName = document.customerInfo.lastName 
          let customerDateOfBirth = document.customerInfo.dateOfBirth 
          let customerGender = document.customerInfo.gender 
          let customerPhoneNumber = document.customerInfo.phoneNumber 
          let customerAccountNumber = document.customerInfo.accountNumber
          let customerAccountType = document.customerInfo.Account 
          let customerPlace = document.customerInfo.Place 
          let customerConfirm = document.customerInfo.confirmation

    // customer card data 

         let customerCardName = document.card.cardName 
         let customerBankName = document.card.bankName 
         let customerCardHolderName = document.card.cardHolderName 
         let customerCardType = document.card.cardType 
         let customerBgColor = document.card.bgColor 
         let customerFontColor = document.card.fontColor 
         let customerBackgroundImage = document.card.image 
         let customerFontFamily = document.card.fontFamily  


   

    //    customer info form starts here 
        document.getElementById("message").style.display = "none"
        document.getElementById("updt").style.display = "none"
        // console.dir(u)
        //         for(var ik = 0; ik <=u.length-1; ik++)
        //         {
        //             u[ik].style.display = "none"

        //         }

        let x = document.getElementsByTagName("span")

        console.dir(x);

        for(var i = 0; i<=x.length-1; i++)
            {
                    // console.log(x[i])
                    x[i].style.display = "none"
                    x[i].style.color = "red"
       
            }

        
         

         function customerForm(e)
         {
            e.preventDefault();


            for(var i = 0; i<=x.length-1; i++)
                {     
                        x[i].style.display = "block"
                        x[i].style.color = "red"
         
                }
            
            
            var f = new FormData(e.target);


                 customerDetails = {}
            
            
                for(var k of f.keys())
                {
                     customerDetails[k] = ""
                   
                }

                for(var p of f.keys())
                {
                       if(f.get(p) !== "")
                        {
                            customerDetails[p] = f.get(p)   
                            document.getElementById(p).style.display = "none"
                        }
                        else 
                        {
                            document.getElementById(p).style.display = "block"
                        } 

                     
                }
                   
               
                    if(f.get('confirmation') == "on")
                        {
                            
                             customerArray.push(customerDetails)

                             for(var j of f.keys())
                             {
                                document.getElementById(j).style.display = "none"
                             }
                             
                        document.getElementById("message").style.display = "block"
                               
                        }
            
                
                // console.log(customerDetails);
                // console.log(customerArray);

         }

         


    // Customer info form ends here 
    
    

    // Card info starts here 

               var atmCard = document.getElementById("ATMCard")
               function  customizedCardBgColor(e)
               {
                         atmCard.style.backgroundColor = e.target.value
               }

               function customizedCardColor(ev) 
               {
                       atmCard.style.color = ev.target.value
               }
               let n
               function customizedCardBgImg(e)
               {         
                         console.log(e.target.value)
                         n =  window.URL.createObjectURL(e.target.files[0]);
                        console.log(n)
                        atmCard.style.backgroundImage = "url(" + n + ")"
                        atmCard.style.backgroundSize = "100% 100% "
                        atmCard.style.backgroundRepeat = "no-repeat"
                          
                      

               }

               function customizedCardFontSize(e)
               {
                        atmCard.style.fontFamily = e.target.value 
               }


              function cardSubmit(ev)
              {
                    ev.preventDefault();
                    
                    var cardForm = new FormData(ev.target)

                    customerDetails.cardDetails = {}

                     for(var k of cardForm.keys())
                       {
                          customerDetails.cardDetails[k] = ""
                       }

                     for(let i in customerDetails.cardDetails)
                     {
                        if(i == "image" ) 
                        {
                              console.log(n)
                             
                                 console.log(customerDetails.cardDetails.bgColor)

                                if(customerDetails.cardDetails.bgColor == "#e3e2e7")
                                    {
                                      
                                      customerDetails.cardDetails["image"] = n;
                                    }
                        }
                            
                             
        
                        else 
                        {
                              customerDetails.cardDetails[i] = cardForm.get(i);
                        }

                       // customerDetails.cardDetails[i] = cardForm.get(i);
                       
                     }

                    //  customerDetails.cardDetails

                    console.log(customerArray);

                    genUI(customerArray)
                    customerDataRefresh()
                    customerCardRefresh()
                     document.getElementById("message").style.display = "none"
                    
              }



    // Card info ends here 

                function customerDataRefresh()
                {
                    customerFirstName.value = ''
                    customerLastName.value = ''
                    customerDateOfBirth.value = '' 
                    var radioCheck = document.querySelectorAll("#gen")
                         radioCheck.forEach(function(el) 
                               {
                                   el.checked = false 
                               }
                               )
                    customerPhoneNumber.value = ''  
                    customerAccountNumber.value =  ''
                    customerAccountType.value =  ''
                    customerPlace.value = ''
                    customerConfirm.checked = false 
                    
                }

                function customerCardRefresh()
                {
                    customerCardName.value = ""
                    customerBankName.value = "" 
                    customerCardHolderName.value = ""
                    customerCardType.value = "" 
                    customerBgColor.value = "#E3E2E7"
                    customerFontColor.value = "#rrggbb" 
                    customerBackgroundImage.value = ""
                    customerFontFamily.value= ""
                    atmCard.style.backgroundColor = ""
                    atmCard.style.color = ""
                    atmCard.style.backgroundImage = ""
                    atmCard.style.fontFamily = ""

                }
    
let currentIndex;

        
                function genUI(arr)
                {
                       document.getElementById("tbd").innerHTML = ""
                       var sNo = 0;

                       var str1 = " 1 2 3 4 "
                       var str2 = " 5 6 7 8 "
                       var str3 = " 9 0 1 2 "
                       var str4 = " 3 4 5 6 "
                    
                      arr.forEach(function(el, indx)
                         {
                             var newtr = document.createElement("tr")
                             var newtdSno = document.createElement("td")
                                         newtdSno.innerHTML =  sNo + 1
                                         sNo++;
                             var newtdCustomerInfo = document.createElement("td")
                             var newUl = document.createElement("ul")
                             var newliName = document.createElement("li")
                                              newliName.innerHTML = "Name : " + el.firstName + " " + el.lastName
                             var newliDob = document.createElement("li")
                                               newliDob.innerHTML = "Date of Birth : " + el.dateOfBirth 
                             var newliGender = document.createElement("li")
                                              newliGender.innerHTML = "Gender : " + el.gender 
                             var newliPhoneNumber = document.createElement("li")
                                              newliPhoneNumber.innerHTML = "Phone Number : " + el.phoneNumber 
                             var newliAccountNum = document.createElement("li")
                                             newliAccountNum.innerHTML = "Account Number : " + el.accountNumber
                             var newliAccount = document.createElement("li")
                                                newliAccount.innerHTML = "Account Type : " + el.Account 
                             var newliPlace = document.createElement("li")
                                                  newliPlace.innerHTML =  "Place : " + el.Place 
   
                             //   create an atm card dynamically
                             var newtdCard = document.createElement("td")
                                             
                             var newdivCard = document.createElement("div")
                                                  newdivCard.setAttribute("id", "mainCard")

                                       newdivCard.style.fontFamily = el.cardDetails.fontFamily 
                                       newdivCard.style.color = el.cardDetails.fontColor
                                        // console.log(el.cardDetails.image)
                                       newdivCard.style.backgroundImage = "url(" + el.cardDetails.image  + ")"
                                       newdivCard.style.backgroundSize = "100% 100% "
                                       newdivCard.style.backgroundRepeat = "no-repeat"
                                       newdivCard.style.backgroundColor =  el.cardDetails.bgColor
                                       
                                    
                             var newdivCardHead = document.createElement("div")
                                                   newdivCardHead.setAttribute("id", "cardHeadD")
                                        var newHeadParaOne = document.createElement("p")
                                                     newHeadParaOne.innerHTML = el.cardDetails.cardName
                                        var newHeadParaTwo = document.createElement("p")
                                                     newHeadParaTwo.innerHTML = el.cardDetails.bankName 
                                            newdivCardHead.appendChild(newHeadParaOne)
                                            newdivCardHead.appendChild(newHeadParaTwo)


                             var newdivCardBody = document.createElement("div") 
                                                   newdivCardBody.setAttribute("id", "cardBodyD")

                                         var newDivImg = document.createElement("div")
                                                        newDivImg.setAttribute("id", "cardImgD")
                                         var newImg = document.createElement("img")  
                                                         newImg.src = "./images/cardChipbest.jpg"
                                        
                                                     newDivImg.appendChild(newImg)
                                                     newdivCardBody.appendChild(newDivImg)
                                                
                             var newBodyParaOne = document.createElement("p")
                                               newBodyParaOne.setAttribute("id", "cardNumberD")
                                               
                                            newBodyParaOne.innerHTML = "<b>" + str1  + "</b>" +
                                                                    "<b>"+ str2 + "</b>" + "<b>" + str3 + "</b>" + "<b>" + str4 + "</b>" 

                                                            //   var j =   parseInt(str1)
                                                            //   var k =   j++
                                                            //   str1 = parseInt(k)
                                                              

                             var newBodyParaTwo = document.createElement("p")
                                                  newBodyParaTwo.innerHTML = "<p>" +  'VALID' + "<br>" + 'THRU' + "</p>" +  "<b>" + '01/28' + "</b>"
                                                  newdivCardBody.appendChild(newBodyParaOne)
                                                  newdivCardBody.appendChild(newBodyParaTwo)  
      

                             var newdivCardFoot = document.createElement("div")        
                                                   newdivCardFoot.setAttribute("id", "cardFootD")
                                                   
                                    var newFootParaOne = document.createElement("p")
                                                        newFootParaOne.innerHTML = el.cardDetails.cardHolderName 
                                    var newFootParaTwo = document.createElement("p")
                                                         newFootParaTwo.innerHTML = el.cardDetails.cardType
                                                
                                            newdivCardFoot.appendChild(newFootParaOne)
                                            newdivCardFoot.appendChild(newFootParaTwo)



                             var newtdEdit = document.createElement("td")

                                         var editBtn = document.createElement("button")
                                                       editBtn.innerHTML = "Edit" 
                                                       editBtn.style.margin = "10px" 

                                        editBtn.onclick = function()
                                                          {
                                                               currentIndex = indx 

                                                               customerFirstName.value = el.firstName
                                                               customerLastName.value =  el.lastName
                                                               customerDateOfBirth.value =  el.dateOfBirth
                                                               customerGender.value = el.gender 
                                                               customerPhoneNumber.value =  el.phoneNumber
                                                               customerAccountNumber.value = el.accountNumber
                                                               customerAccountType.value =  el.Account
                                                               customerPlace.value =  el.Place

                                                               customerCardName.value = el.cardDetails.cardName
                                                               customerBankName.value =  el.cardDetails.bankName
                                                               customerCardHolderName.value =  el.cardDetails.cardHolderName
                                                               customerCardType.value = el.cardDetails.cardType
                                                               customerBgColor.value =  el.cardDetails.bgColor
                                                               customerFontColor.value =   el.cardDetails.fontColor
                                                            //    customerBackgroundImage.value =  "url(" + el.cardDetails.image  + ")"
                                                               customerFontFamily.value =  el.cardDetails.fontFamily 

                                                               document.getElementById("updt").style.display = "inline-block"
                                                           
                                                               document.getElementById("cardSubBtn").style.display = "none"
                                                               document.getElementById("mainFormBtn").style.display = "none"

                                                         

                                                                
                                                          }

                                         var deleteBtn = document.createElement("button")
                                                         deleteBtn.innerHTML = "Delete"

                                             
                                                       deleteBtn.onclick = function ()
                                                                             {

                                                                               arr.splice(indx, 1)
                                                                               genUI(customerArray)

                                                                             }




                                    newtdEdit.appendChild(editBtn)
                                    newtdEdit.appendChild(deleteBtn)
                                               
                             //  Card design ends here 

                                            newUl.appendChild(newliName)
                                            newUl.appendChild(newliDob)
                                            newUl.appendChild(newliGender)
                                            newUl.appendChild(newliPhoneNumber)
                                            newUl.appendChild(newliAccountNum)
                                            newUl.appendChild(newliAccount)
                                            newUl.appendChild(newliPlace)

                                            newdivCard.appendChild(newdivCardHead)
                                            newdivCard.appendChild(newdivCardBody)
                                            newdivCard.appendChild(newdivCardFoot)
                                            newtdCard.appendChild(newdivCard)
                                        
                                            newtdCustomerInfo.appendChild(newUl)
                                            newtr.appendChild(newtdSno)
                                            newtr.appendChild(newtdCustomerInfo)
                                            newtr.appendChild(newtdCard)
                                            newtr.appendChild(newtdEdit)

                                       document.getElementById("tbd").appendChild(newtr)

                         })
                }

            

                       // Tool box starts here 

                       //  To search  we use filter 

                                 
                        function searchItem(e)
                        {
                           var filtArray =  customerArray.filter(function (cust)
                              {
                                         if(cust.firstName.toLowerCase().startsWith(e.target.value.toLowerCase()))
                                         {
                                               return true
                                         }
                                         else 
                                         {
                                               return false
                                         }
                              }
                              )

                              genUI(filtArray)
                        }

                       //  sort based Ascending order 

                         function sortASCDESC(ev)
                         {
                                   customerArray.sort(function(a,b)
                                   {
                                       if(ev.target.value === "ascending order")
                                       {
                                           if(a.firstName > b.firstName)
                                            {
                                                  return 1
                                            }
                                            else 
                                            {
                                                   return -1
                                            }
                                       }

                                       if(ev.target.value === "descending order")
                                       {
                                             if(a.firstName > b.firstName)
                                             {
                                                  return -1
                                             }
                                             else 
                                             {
                                                return 1
                                             }
                                       }
                                         
                                   })

                                   genUI(customerArray)
                         }


                         function cardTypeFilter(ev)
                         {
                                   

                                   var cardFilterArray = customerArray.filter(function(cust)
                                                          {
                                                            
                                                               if(cust.cardDetails.cardType === ev.target.value)
                                                               {
                                                                   return true    
                                                               }
                                                               else 
                                                               {
                                                                   return false
                                                               }
                                                          }

                                    )

                                    genUI(cardFilterArray)


                         }

                         function bankNameFilter(ev)
                         {
                                
                                   var bankNameFilterArray = customerArray.filter(function(cust)
                                                         {
                                                            if(cust.cardDetails.bankName === ev.target.value)
                                                            {
                                                                return true
                                                            }
                                                            else 
                                                            {
                                                                return false
                                                            }
                                                         }
                                      )

                                genUI(bankNameFilterArray)
                         }


                    // Tool box ends here 


                   function update()
                   {
                        var updateDetails = 
                        
                            {
                                 firstName: customerFirstName.value,
                                 lastName: customerLastName.value, 
                                 dateOfBirth: customerDateOfBirth.value, 
                                 phoneNumber: customerPhoneNumber.value, 
                                 accountNumber: customerAccountNumber.value,
                                 Place :  customerPlace.value,
                                 gender :   customerGender.value,
                                 Account :  customerAccountType.value,
                                 cardDetails : 
                                 {
                                    bgColor : customerBgColor.value,
                                    cardHolderName : customerCardHolderName.value,
                                    cardName : customerCardName.value,
                                    fontColor : customerFontColor.value,
                                    bankName :  customerBankName.value,  
                                    cardType :  customerCardType.value,
                                    fontFamily : customerFontFamily.value
                                 }
                            }
                        
                         customerArray[currentIndex] = updateDetails
                         genUI(customerArray)
                   }
      
                  
                   
                   
        
               
        
    
                  