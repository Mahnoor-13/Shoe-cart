import React, { Component } from "react";

export const DataContext = React.createContext();
export class DataProvider extends Component {

  state = {

    

    products: [
      {
        _id: "1",
        title: "Nike Shoes 01",
        src:
          "data:image/jpeg;base64,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",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        inCart: false
        
      },
      

      {
        _id: "2",
        title: "Nike Shoes 02",
        src:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBAQExAWFhEVFhIVGBYVEhUQEBcXFRYWFhUSFRYZHSggGBslHRcWITEhJTUrLi4uFx8zODUsNygtLisBCgoKDg0OGBAQGS4mICUtLS0uLy0vLS83Ly0tLS0tLy0tLy0tLy0tLS0tLS0tLy0tLS4vLS0tLS01LS02LS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EAEEQAAIBAgMEBwUEBwgDAAAAAAABAgMRBCExBRJBUQZhcYGRofATIjLB0RRScrFCU2KSwuHxBxUWIySCoqND0uL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAoEQEBAAIBAwMDBAMAAAAAAAAAAQIDEQQhMRJBURNC8HGBobEUIjL/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvi8XGnrryM8PiIzW9F3WnWnyZy21Nob1aouEZOP7uX18T3ZtX2WcJa8Hx73r2Mp6u7oui+iWOtBRwu0lL4lbgnwfX1FyFRO9mnbLJ37i3LC42MgASgAAAAAAAAAAAAAAAAAAAAACOjXjNXjJSXU0yj0gxzo0JTjbebjGN+Dk7N9bSu7dR8+wk6tCftKM2+dNyX/ABb17Hz7iLlI1w05Z43KPqYNR0f27DEw5VFlKLunda5PNdj08zbksrOAAAAeSkkm27Jat5I47pJ0wUVKnRefGf8A68lk83yemTCZOUHS3D7mI31KG7Nb0k3eSlFRj8Kzd1bwfM0/96U1+lKX4ZRSfO0c2uz+RoauLqVpXSc2+Oq8eOt79ZNS2JXqZSluxevYZZXHl6WvVtuM5vEdVhNs04Q3m5O6vaTTsu5G12JjZScp3XC1mpLjq1lx0v4XscX/AHHVlJRqYheyi1fcW7N203mtDbwwkqCisOnZy97eqSfZL3nmuaXNa2Kcr56pe0rpa3SWUJ7n2WrPelaMqcYulaytvVJSilJveVupc1fdYTFxqLLKaScoNrfjfTeSbXB5rJ2djl7qeU5StbSLcc+d1nkSOtGUoSUlGvC6TUrOz+KLS+KOV7NPQtM7Kxz04ZSSTi/v+fnv4dYDRYXbMlNQqShJvTdi4aK7Wcnd2u+GSN3CaaumaTKVx7NWWHlkACzMAAAAAAAAAAAAAAAByf8AaBWe5QprjKU+6CUbf9nkcthqr0ad/Xyfkjd9O53xEI8qafY3KX0Rz0brj4+upmOfl6/S48ao2KhLeVWlK1VW/DLqdtHyfXZ5adJsrpbTl/l1r06q1TVu/K/J5q+hylKt6+XgvyNZtDade+7U2eqtNN7sqdVSl27soqSby00s9Rjnwru6aZ94+tR2lRauqsLfiRR2h0lw1JO9RN8lr5nxz/EGGUt1yxNGWrjJKdvG8uGT7DZYOthJ2X2vevopT9jf/a1Fl/qRzTpMvlududJ6uJl7OCaj92Lv13lL1xyyKeF2UrqVT3pfdXwcNOffyLlLDxjG0FaPZ18fDU9Ta19ce/XUpcrXXq0Y4ePKenGK0ikupeuXkZpr581/PVFdT9eXpkkZevJFWlizCa0XC11yvpl4nvs+TaXU7Lw0PnnS7bTwu0KdWnbe9lHfjn70XOV4PldRXY0nnkd5s/HRq0oVoO8JxUlzzXHk75doRwvU4tdfa7dXYvLUwjhV7X2nvKX3b3jfS9uduGnG18zKEvXr15EsZetLrl5IKd54Txm91xXO+mklo/yGztsze8t2UGsneLSv+y3r2/Uj3k83r1PVdXggnxvf+l7t26if0Z3jjixuNnbWbuquWdk7p3XCWWnFWdnl1mzoYhT015PU5aVN7rzadmt5JZPS6TefYYbPjiITU5VlJWeSg4tt8W23l1FplYyz0Y5c2Xh2QNbg8e7Wmu9fNGwhNPNO5pLy48sLj5ZAAlUAAAAAAAAAAHzvpXVviqt+G7Fd0Vl43NOlcudLX/rKvb+SSNfCRzZ3u97p8eNeP6JlAkjJkSqHu8VbWMsTRp1Vu1KcZL9qKkl9O7M57afQmnNN0qjg7ZRk9+nz1fvLz7Df5mSiSpcI+a1tiY3DSe57SML/AB0Jya74wtJd6NjQ2ljIxv8AaZ3TzjUjGVtFxjvd2ueazu+4zWhBiMLTqK1SnF9bS8nquJLLLC+zkf8AGGKg1eNKa/DOLtrqpWWXVbwPK/T+tZqOHgpc3OU0v9tl18Tb4vojSlnCco5K1/fjrm887243Nbiuh9VfDuy1eT3Xquat1+PfKn+0cVjcTUq1JVaknKcndt9WStySStbqPpH9lmKk8NVg3lTq+72SSk143fec1HofipTcfZqMcvenONs87WTb5/U7zo5smOEoKlF3k25Tla29JpJu3BLRLq7yEyV0EZeu4zU+Xc/XYU4y9a6+kTU4ttL6vrv68+MoyWoyvlx7vS4ZlqFo+vd5+rlaOSy/Jq57e/dzVizP08+Vpzv6+hJF2+pVVS3Lxueqr3d9gccriqevmS0qzWafemUYz9aGUaluI5VuLc0toy42fkWYY+L1y8znvbdY+0f01LeplenldVCono0zI5VYrr8zJ7WlHPf+ngPqRnely9nUAp7Lx6rU1PR8V3tJ9jtcuGjmyllsoAAgK20cUqVKdTksutvJLxLJznTGU7UrK8bybtzSVvK4HPYmjGrJzqRvN6yTcZd9sn3pkD2VH9Go11SjfzTX5Eir80SRrom4S+zXDfsw7Y1V/uya/VvsnK/nFD7DP7i/fh9S+qiPSv0sWv8Am7WvWCn92K7Zr+FMkWCfGpFdilP890tuB44Ca8UXrNt91dYSnxc32bsF+TZmqFL9V4zn8mjJoxLejH4Z3qNt+6slTp/qaf7t/wAz1U6f6mn+4l+R4j0t6Z8KfUz+a9dCk/8Ax2/DOa8r2MfsNP8ARnNfitP6Hp6pEXDH4Xx37J9zz7HJZxafY7c+Dt1c9PHOnC2Tum880ovs07NDJSJY1npfLlw8Cl1z2aTqsvuiOGf9b/zC9cH4E/tIvWCfZeP5WPN2m/vLsaa80V+nWs6nG+UF/V8hvkzpRf6cu+KfzR48MuFXlrC/8RX0ZNJ1Gv5/th7a3F+ZjLE39K57LAr9b/1//Rj9gj+sfdFL5sj0ZLzqNPz/ABUcsR+0RyxS5ln7DT470u2W6v8AikyWCjH4YRXXZX8XmTNVvlW9Zrk7S1QU5ztuwk+tL3f3tDL7FN/HJQXbvT7Msu+/cXZVnLmyXC7MnVemXgvEvNUnlhn12d/5nCz0bq3xMlH4FTt1ZONjqSns7Z8aMbLV6v5IuF64wAEAYVqSnFxkrpmYA5DbOwaqzp3nFcItKfen8Xcc0sUrtbyutVJbkl1dvafVDX7W2NRxMHCrTT0e8vdmmtGpLNFMsbe8rs0dRrxno2Y8z8/PZwcK64prrXvR8Vn5EtaTTppNe/LdXdGU3/xhIu4j+zlX/wAnG1oLipxjVy4qLW7Z24u/AjfQPEJ0d3HxcKLvHfoPff8Alype81O17SbvbuLa8svuV6maO101juyMFvbzXJRfi5fRE9Xo3tBfDVw8u11Ifwsgj0f2pdy/013ZW9tU4Xzv7Pr8jXmORIqLPKFO8YtvVJ+RJS6PbRb96eHiuqdSfluImfRDFKFo4ym2lknRkk3wTe+7LrsxzBBKCVu0zVuZVl0O2jLXFUI6aKpL5IsYXoNiL3q49W5U6LT8ZT+Q5gyUo3avwXz+hlux5mT6CVNVj5X66Kemn6XWytPoVjFL3cbTcf2qUovwUmOYJo0k0ncOlpZ+rMq/4P2hGHu4mjKSSsmpwTt12diTD9F9otRc61CLT0TqT4Na7q5jmCd02eK/I8rbB2jFpQlQmuLc507d247lnCbCxtnvyoLPRSnP+FDsKzkZbxtF0eqtWdeCzi8qTlo07fEuVizS2B96s3+GCj+bZHMGh3s7Wf8AS31Pc+R00NiUk03vNrnJrW19LckW6WCpx0hG/O134vMjmDlKOEqS0i8+Sel8ncv0NgyfxNLv3n5ZHRgjlKhhtk04cN59enhoXkrZHoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 25,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        inCart: false
      },

      {
        _id: "3",
        title: "Nike Shoes 03",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSr0xtIXajqqZl5ZzNoz99Rn5NUXo7KX5KlTw&usqp=CAU",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 31,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        inCart: false
      },

      {
        _id: "4",
        title: "Nike Shoes 04",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShdjM-MSHC-WKiQnl3n1zXh-rUUJaHSjn2gQ&usqp=CAU",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 19,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        inCart: false
      },

      {
        _id: "5",
        title: "Nike Shoes 05",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH_r02uzja03xLX8QLg-2WsBBWM9wAnVkxug&usqp=CAU",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 30,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        inCart: false
      },

      {
        _id: "6",
        title: "Nike Shoes 06",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_16JHSnIa_AEj2wFADkCzQmg5psc4UaifVw&usqp=CAU",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        price: 36,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        inCart: false
      },
    ],
  };

  render() {
    const { products } = this.state;
    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
