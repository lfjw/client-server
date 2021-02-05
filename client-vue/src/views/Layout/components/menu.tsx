import { defineComponent, reactive } from "vue";

import { data } from "./menuListData";
export default defineComponent({
  setup() {
    // let str = "";
    // data.forEach(p => {
    //   str = `<Menu.SubMenu title="${p.name}">`;
    //   p.children &&
    //     p.children.forEach(d => {
    //       str += `
    //         <Menu.Item>
    //           <span>${d.name}</span>
    //         </Menu.Item>
    //       `;
    //     });
    //   str += `</Menu.SubMenu>`;
    // });

    // console.log(str);
    console.log(data);
    const menuData = reactive(data);
    console.log(menuData);

    return () => (
      <div> </div>
      // <Menu theme="dark" mode="inline">
      //   <Menu.SubMenu title="系统管理" Icon>
      //     <Menu.Item>
      //       <span>日志管理</span>
      //     </Menu.Item>
      //   </Menu.SubMenu>
      // </Menu>
    );
  }
});
