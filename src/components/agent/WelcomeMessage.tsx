import Image from "next/image";
import profilePic from "@/../public/images/profile/gabriel-pitrella.png";
import { PROFILE_DATA } from "@/lib/features/profile/data";

const WelcomeMessage = () => (
  <div className="flex gap-3">
    <Image
      src={profilePic}
      alt="Gabriel Pitrella"
      className="h-14 w-14 shrink-0 rounded-full object-cover"
      priority
    />
    <div className="max-w-[520px] rounded-2xl bg-dark/5 px-4 py-3.5 dark:bg-light/10">
      <p className="text-sm font-semibold">Gabriel Pitrella</p>
      <p className="text-xs text-dark/60 dark:text-light/60">{PROFILE_DATA.hero.subtitle}</p>
      <p className="mt-2.5 text-sm leading-relaxed">
        ¡Hola! Soy el asistente de Gabriel. Puedo contarte sobre su experiencia, las tecnologías que
        maneja, sus proyectos y su formación. ¿Qué te gustaría saber?
      </p>
    </div>
  </div>
);

export default WelcomeMessage;
