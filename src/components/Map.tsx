import React from "react";

const Map: React.FC = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.543686537969!2d20.459814968898634!3d44.79010741913393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70134d0d4ccb%3A0x422ff7236d7e67ec!2z0JfQstC10YfQsNC90YHQutCwIDEwLCDQkdC10L7Qs9GA0LDQtA!5e0!3m2!1ssr!2srs!4v1678740307777!5m2!1ssr!2srs"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
