import User from "./User";

export default function Users() {
  return (
    <div className="right">
      <User
        src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="men"
        name="Scott"
      />
      <div className="users__block">
        <User
          src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg"
          alt="Jessy"
          name="Jessy"
          min
        />
        <User
          src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg"
          alt="Abby"
          name="Abby"
          min
        />
        <User
          src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-06/Depositphotos_47173409_xl-2015.jpg?itok=S8cLZnNM"
          alt="Ivan"
          name="Ivan"
          min
        />
        <User
          src="https://www.washingtonpost.com/resizer/1RhnmRzobv_b5lzu2YIz381sV8s=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4ZLH33AYAAI6TOHGKZYZBQX5BA.jpg"
          alt="eggs"
          name="eggs"
          min
        />
        <User
          src="https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-1024x768.jpeg"
          alt="Kate"
          name="Kate"
          min
        />
        <User
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=480:*"
          alt="Smoothie"
          name="Smoothie"
          min
        />
      </div>
    </div>
  );
}
