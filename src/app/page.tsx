"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "الرئيسية",          id: "#hero"},
        {
          name: "عنا",          id: "#about"},
        {
          name: "المجموعات",          id: "#collections"},
        {
          name: "لماذا نحن",          id: "#features"},
        {
          name: "شهادات العملاء",          id: "#testimonials"},
        {
          name: "اتصل بنا",          id: "#contact"},
      ]}
      brandName="القصر"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="القصر"
      description="اكتشف مجموعات الأثاث والمفروشات الراقية المصممة بعناية لتجعل كل لحظة ذات معنى."
      buttons={[
        {
          text: "استكشف المجموعات",          href: "#collections"},
        {
          text: "احجز استشارة خاصة",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EuSBkemDAIzXy4q8Sr1L5pGAHr/uploaded-1781027119812-bdh13ekw.jpg"
      videoSrc="http://img.b2bpic.net/free-photo/blooming-flower-plant_116380-11.jpg"
      imageAlt="لقطة سينمائية بطيئة لأثاث فاخر ومفروشات راقية"
      videoAriaLabel="فيديو سينمائي للأثاث الفاخر"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="في القصر، كل قطعة أثاث تروي قصة. لعقود من الزمن، كان الأثاث الفاخر رمزًا للجمال، الأناقة، والتصميم الخالد. مجموعاتنا مختارة بعناية لتقديم حرفية استثنائية وجمال فريد في كل قطعة."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="مصممة لأجيال"
      tag="إرثنا"
      metrics={[
        {
          id: "m1",          value: "50+",          description: "عقود من الخبرة"},
        {
          id: "m2",          value: "1000+",          description: "قطع فنية مصممة يدويًا"},
        {
          id: "m3",          value: "10K+",          description: "عملاء راضون"},
        {
          id: "m4",          value: "100%",          description: "جودة موثوقة"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="collections" data-section="collections">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "طقم جلوس فاخر",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-sterling-silver-ring-with-diamonds-with-burning-decorative-candle-heart-shape-black-wall_140725-12842.jpg",          imageAlt: "طقم جلوس فاخر"},
        {
          id: "p2",          name: "طاولة قهوة بتصميم فريد",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-fashion-stylish-brunette-woman-model-with-evening-makeup-red-lips-white-jacket_158538-11531.jpg",          imageAlt: "طاولة قهوة بتصميم فريد"},
        {
          id: "p3",          name: "سرير ملكي",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/wedding-rings-decorated-nest-with-greenery-white-ribbon_8353-9808.jpg",          imageAlt: "سرير ملكي"},
        {
          id: "p4",          name: "خزانة ملابس أنيقة",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-khoncha-with-chocolates_140725-7640.jpg",          imageAlt: "خزانة ملابس أنيقة"},
        {
          id: "p5",          name: "كرسي بذراعين كلاسيكي",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/wireless-earphones-creative-collage_23-2149378055.jpg",          imageAlt: "كرسي بذراعين كلاسيكي"},
        {
          id: "p6",          name: "مكتب تنفيذي فخم",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/serious-caucasian-girl-posing-dark-wall-shooting-with-european-lady_197531-13996.jpg",          imageAlt: "مكتب تنفيذي فخم"},
        {
          id: "p7",          name: "وحدة تخزين عصرية",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/round-shiny-crystal-colored-background_23-2147948683.jpg",          imageAlt: "وحدة تخزين عصرية"},
        {
          id: "p8",          name: "أريكة تصميمية",          price: "السعر عند الطلب",          imageSrc: "http://img.b2bpic.net/free-photo/young-blond-woman-with-bright-makeup_158538-10334.jpg",          imageAlt: "أريكة تصميمية"},
      ]}
      title="المجموعات المميزة"
      description="استكشف مجموعتنا الفاخرة من الأثاث، كل قطعة دليل على براعة فنية لا مثيل لها وتصميم خالد."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="رفاهية تتجاوز التوقعات"
      description="في القصر، نعيد تعريف تجربة الأثاث مع خدمة لا مثيل لها وقيمة دائمة. من الحرفية الدقيقة إلى الإرشادات الشخصية، نضمن أن تكون كل لحظة معنا ثمينة مثل قطعة الأثاث التي تختارها."
      accordionItems={[
        {
          id: "a1",          title: "جودة موثوقة",          content: "كل قطعة تأتي مع ضمان جودة موثوقة وهي معتمدة من قبل خبراء التصميم الرائدين، مما يضمن قيمتها وأصالتها."},
        {
          id: "a2",          title: "حرفية استثنائية",          content: "يجمع حرفيونا الخبراء بين أجيال من المهارة والاهتمام الدقيق بالتفاصيل، لإنشاء أثاث هو حقًا عمل فني."},
        {
          id: "a3",          title: "مستشارو أثاث شخصيون",          content: "استفد من خبراء متخصصين يقدمون إرشادات مخصصة، نصائح تصميم، وتوصيات مصممة خصيصًا لتفضيلاتك الفريدة."},
        {
          id: "a4",          title: "خدمات تصميم مخصصة",          content: "حقق رؤيتك الفريدة مع مصممينا الحرفيين. نصمم قطعًا مخصصة تعكس قصتك وأسلوبك الشخصي."},
        {
          id: "a5",          title: "صيانة وتلميع احترافي",          content: "تأكد من أن قطعك الثمينة تحتفظ ببريقها مدى الحياة مع خدمات الصيانة والتلميع الاحترافية المجانية."},
        {
          id: "a6",          title: "قيمة مدى الحياة",          content: "أثاث القصر مصمم ليعتز به عبر الأجيال، مدعومًا بالتزامنا الثابت بالجودة والجمال الدائم."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/engagement-rings_627829-11906.jpg"
      imageAlt="صورة مقربة لوثيقة اعتماد جودة الأثاث"
      mediaAnimation="opacity"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "أبرز العلامات التجارية الفاخرة",        "شركات الأثاث الراقية",        "مصممون عالميون",        "شركاء الديكور",        "خبراء التصميم",        "بيوت الموبيليا العريقة",        "القصر",        "عقود من الثقة"]}
      title="إرث من الثقة"
      description="نفخر بخدمة أجيال من العملاء المميزين، القصر مرادف للرفاهية والأصالة في الأثاث الفاخر، ومعترف به جنبًا إلى جنب مع أرقى العلامات التجارية العالمية."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "جودة وخدمة لا مثيل لهما",          quote: "حرفية طقم الأثاث الذي اخترته من القصر استثنائية حقًا. الخدمة التي تلقيتها كانت رائعة، مما جعل التجربة بأكملها لا تُنسى.",          name: "سارة جونسون",          role: "المديرة التنفيذية، مجموعة الأناقة",          imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-woman-dressed-black-sweater-posing_114579-81856.jpg",          imageAlt: "سارة جونسون، المديرة التنفيذية، مجموعة الأناقة"},
        {
          id: "t2",          title: "قطعة الأثاث المثالية للمنزل",          quote: "كان القصر المكان المثالي للعثور على قطعة أثاث خالدة. ساعدني مستشاروهم في اختيار قطعة تعكس أسلوبنا حقًا.",          name: "مايكل تشين",          role: "رائد أعمال",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-businessman-taking-papers-from-bag_1262-6105.jpg",          imageAlt: "مايكل تشين، رائد أعمال"},
        {
          id: "t3",          title: "تجربة رفاهية خالصة",          quote: "منذ اللحظة التي دخلت فيها، شعرت بالرفاهية والأناقة. القصر يفي بوعده بالثقة وتجربة شخصية حقيقية.",          name: "إميلي رودريغيز",          role: "جامعة فنون",          imageSrc: "http://img.b2bpic.net/free-photo/people-beauty-ethnicity-facial-expressions-concept-attractive-african-american-female-model-rests-coffee-shop-with-friend-lover_273609-3170.jpg",          imageAlt: "إميلي رودريغيز، جامعة فنون"},
        {
          id: "t4",          title: "أثاث يتجاوز الجمال",          quote: "ليس مجرد أثاث جميل، بل تجربة تجسد الرفاهية والأناقة والثقة المطلقة. القصر يمثل إرثه حقًا.",          name: "ديفيد كيم",          role: "مصمم ديكور",          imageSrc: "http://img.b2bpic.net/free-photo/shopping-girl-looking-her-mobile-phone_23-2148023457.jpg",          imageAlt: "ديفيد كيم، مصمم ديكور"},
        {
          id: "t5",          title: "يعتز به لأجيال",          quote: "لقد تم توارث قطعة القصر الخاصة بي عبر عائلتي، وهي شهادة حقيقية على جمالها وجودتها الدائمة. إنها عزيزة لأجيال.",          name: "أمينة إبراهيم",          role: "فاعلة خير",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-senior-woman-posing-studio_23-2149883525.jpg",          imageAlt: "أمينة إبراهيم، فاعلة خير"},
      ]}
      title="ماذا يقول عملاؤنا"
      description="اسمع ما يقوله عملاؤنا الكرام عن تجربتهم مع القصر والجمال الخالد لإبداعاتنا."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="تواصل معنا"
      title="قم بزيارة صالات العرض لدينا وامتلك قطعة أبدية"
      description="اكتشف الأثاث المصمم ليصبح جزءًا من إرثك في مواقعنا الحصرية في جميع أنحاء مصر. احجز موعدًا خاصًا لتجربة رفاهية شخصية.\n\n**الفروع الرئيسية:** القصر للأثاث، القصر للمفروشات، ElKasr Furniture - القصر للموبيليا\n\n**ساعات العمل:**\nالاثنين – السبت: 11:30 صباحًا – 10:00 مساءً\nالجمعة: 12:30 مساءً – 10:00 مساءً\nالأحد: مغلق\n*(قد تختلف الساعات حسب الفرع)*"
      imageSrc="http://img.b2bpic.net/free-photo/vintage-modern-restaurant-with-full-comfort_140725-9761.jpg"
      imageAlt="تصميم داخلي فاخر لمتجر أثاث القصر مع عروض أنيقة"
      mediaAnimation="opacity"
      inputPlaceholder="أدخل بريدك الإلكتروني للحصول على التحديثات"
      buttonText="اشترك"
      termsText="بالاشتراك، أنت توافق على تلقي رسائل بريد إلكتروني ترويجية من القصر."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="القصر"
      columns={[
        {
          title: "المجموعات",          items: [
            {
              label: "مجموعة الأثاث الكلاسيكي",              href: "#collections"},
            {
              label: "مجموعة غرف النوم",              href: "#collections"},
            {
              label: "مجموعة المجالس الفاخرة",              href: "#collections"},
            {
              label: "المجموعة المميزة",              href: "#collections"},
          ],
        },
        {
          title: "الشركة",          items: [
            {
              label: "عنا",              href: "#about"},
            {
              label: "حرفيتنا",              href: "#features"},
            {
              label: "إرثنا",              href: "#metrics"},
          ],
        },
        {
          title: "الدعم",          items: [
            {
              label: "الأسئلة الشائعة",              href: "#"},
            {
              label: "اتصل بنا",              href: "#contact"},
            {
              label: "استشارة",              href: "#contact"},
          ],
        },
        {
          title: "قانوني",          items: [
            {
              label: "سياسة الخصوصية",              href: "#"},
            {
              label: "شروط الخدمة",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 القصر. جميع الحقوق محفوظة."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}