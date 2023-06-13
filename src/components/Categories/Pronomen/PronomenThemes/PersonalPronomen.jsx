import Header from "../../../Header/Header";
import Categories from "../../Categories";

const PersonalPronomen = () => {
   return (
      <div>
         <Header />
         <Categories />
         <h3>PersonalPronomen</h3>
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               borderStyle: "dashed",
            }}
         >
            <table>
               <thead>
                  <tr>
                     <th rowSpan={2}>1</th>
                     <th colSpan={5}>2</th>
                     <th colSpan={3}>3</th>
                  </tr>
                  <tr>
                     <th>1</th>
                     <th>1</th>
                     <th colSpan={3}>1</th>
                     <th>1</th>
                     <th>1</th>
                     <th>1</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Nominativ</td>
                     <td>ich</td>
                     <td>du</td>
                     <td>er</td>
                     <td>sie</td>
                     <td>es</td>
                     <td>wir</td>
                     <td>ihr</td>
                     <td>sie</td>
                  </tr>
                  <tr>
                     <td>Akkusativ</td>
                     <td>mich</td>
                     <td>dich</td>
                     <td>ihn</td>
                     <td>sie</td>
                     <td>es</td>
                     <td>uns</td>
                     <td>euch</td>
                     <td>sie</td>
                  </tr>
                  <tr>
                     <td>Dativ</td>
                     <td>mir</td>
                     <td>dir</td>
                     <td>ihm</td>
                     <td>ihr</td>
                     <td>ihm</td>
                     <td>uns</td>
                     <td>euch</td>
                     <td>ihnen</td>
                  </tr>
                  <tr>
                     <td>Genitiv</td>
                     <td>meiner</td>
                     <td>deiner</td>
                     <td>seiner</td>
                     <td>ihrer</td>
                     <td>seiner</td>
                     <td>unser</td>
                     <td>euer</td>
                     <td>ihrer</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default PersonalPronomen;
