import "./styles.scss";
import { IComponentMethods } from "../../types";

type StatusBar = () => Readonly<IComponentMethods>;

const StatusBar: StatusBar = () => {
  const formatNum = (num: number): string =>
    num >= 10 ? num.toString() : `0${num}`;

  const render = async () => {
    const html = `
            <div class="status-bar">
                <div class="status__left">
                    <div class="status-dots__wrapper">
                        <div class="status-dots__item"></div>
                        <div class="status-dots__item"></div>
                        <div class="status-dots__item"></div>
                        <div class="status-dots__item"></div>
                        <div class="status-dots__item"></div>
                    </div>
                </div>
                <div class="status__time"></div>
                <div class="status__battery">
                    <div class="status__battery__level">82%</div>
                    <div id="battery-icon"></div>
                </div>
            </div>
        `;

    return html;
  };

  const afterRender = async () => {
    const clock: HTMLElement = document.querySelector(".status__time");

    const updateClock = () => {
      const date = new Date();

      const hour: number = date.getHours();
      const min: number = date.getMinutes();

      const time: string = `${formatNum(hour)}:${formatNum(min)}`;

      clock.textContent = time;

      setTimeout(updateClock, 1000 * 60);
    };

    updateClock();
  };

  const self = {
    render,
    afterRender,
  };

  return Object.freeze(self);
};

export default StatusBar;
