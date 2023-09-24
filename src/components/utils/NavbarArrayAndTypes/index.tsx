export interface NavbarItemTypes{
  label:string,
  href:string,
  isDropDown:boolean,
  dropDownData?:Array<NavbarItemTypes>,
}

export const NavbarArray:Array<NavbarItemTypes>=[
  {
    label:"Female",
    href:"/female",
    isDropDown:true,
    dropDownData:[
      {
        label:"Dresses",
        href:"/female/dresses",
        isDropDown:false,
      },
      {
        label:"Shirts",
        href:"/female/shirts",
        isDropDown:false,

      },
      {
        label:"Pants",
        href:"/female/pants",
        isDropDown:false,

      },
      {
        label:"Jackets",
        href:"/female/jackets",
        isDropDown:false,

      },
    ]
  },
  {
    label:"Male",
    href:"/male",
    isDropDown:true,
    dropDownData:[
      {
        label:"Shorts",
        href:"/male/shorts",
        isDropDown:false,
      },
      {
        label:"Trouser",
        href:"/male/trouser",
        isDropDown:false,

      },
      {
        label:"Pants",
        href:"/male/pants",
        isDropDown:false,

      },
      {
        label:"Coats",
        href:"/female/coats",
        isDropDown:false,

      },
    ]
  },
  {
    label:"Kids",
    href:"/kids",
    isDropDown:false,
  },
  {
    label:"All Products",
    href:"/all_products",
    isDropDown:false,
  }
]