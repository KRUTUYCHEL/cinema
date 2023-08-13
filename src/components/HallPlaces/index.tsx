import React  from "react";

export interface Place {
  row: number;
  column: number;
  vip: boolean;
}

export interface HallPlacesProps {
  value: Place[];
  onChange: (value: Place[]) => void;
  onUpdateHtml: (html: string) => void;
  html: string;
}

//const HallPlaces = ({ html }: HallPlacesProps) => {
 // csont [[{
///    disabled: true,
 //   vip: true,
//    taken: true,
//  }]]
 // return (
  //  <div
  //    dangerouslySetInnerHTML={{ __html: html }}
  //    // onClick={}
  //  />
 // )
//}

export default HallPlaces;